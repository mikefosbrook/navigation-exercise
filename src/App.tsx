import React, { useState } from "react";
import "./App.css";
import useOutsideClick from "./hooks/useOutsideClick";
import { data } from "./data/data";

function App() {
  // Filtered results are based on observed pattern of -1 or DEPRECATED.
  // However, one menu item, sipp, persisted and could only be filtered by checking for all lowercase text in string or checking for strings starting with 'no'
  const menuItemsFiltered = data.filter(
    (item) =>
      item.rootItemOrder >= 0 &&
      !item.rootItemId.startsWith("DEPRECATED") &&
      !item.rootItemId.startsWith("no")
  );
  // Re-order based on rootItemOrder (spotted that the item wasn't reliabley iterable by using index)
  const menuItemsReOrdered = menuItemsFiltered.sort(
    (a, b) => a.rootItemOrder - b.rootItemOrder
  );

  const [activePanel, setActivePanel] = useState(undefined);

  const handleActivePanel = (panelId) => setActivePanel(panelId);

  const handleClickOutside = () => {
    setActivePanel(undefined);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      <header className="ii-header">
        <a href="/">
          <img
            className="logo"
            src="/interactive-investor-logo.png"
            width="100px"
            alt="Interactive Investor"
          />
        </a>
        <nav className="ii-navigation">
          <ul ref={ref} className="ii-navigation__primary">
            {menuItemsReOrdered.map(
              (
                {
                  rootItemId,
                  rootItemDisplayText,
                  items: primaryMenuItems,
                  internal,
                  path,
                },
                index
              ) => {
                return (
                  <li
                    className={`${rootItemId === activePanel ? "active" : ""}`}
                    key={`primary-${rootItemId}-${index}`}
                    onClick={() => handleActivePanel(rootItemId)}
                  >
                    {primaryMenuItems.length > 0 && (
                      <>
                        {rootItemDisplayText}
                        <div
                          className={`ii-navigation__panel ${
                            rootItemId === activePanel ? "active" : ""
                          }`}
                          id={rootItemId}
                        >
                          {primaryMenuItems.map(
                            ({ menuTitle, menu: subMenu }, index) => {
                              return (
                                <div
                                  className="ii-navigation__column"
                                  key={`secondary-${rootItemId}-${index}`}
                                >
                                  <span className="ii-navigation__column-title">
                                    {menuTitle}
                                  </span>
                                  <ul className="ii-navigation__submenu">
                                    {subMenu.map(({ href, title }, index) => {
                                      return (
                                        <li
                                          key={`secondary-item-${rootItemId}-${index}`}
                                        >
                                          <a href={href}>{title}</a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    )}
                    {internal && <a href={path}>{rootItemDisplayText}</a>}
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;

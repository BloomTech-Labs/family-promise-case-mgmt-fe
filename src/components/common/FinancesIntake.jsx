import React from 'react';

export const Finances = () => {
  return (
    <>
      <div className="Container">
        <form>
          <div className="financeHeader"></div>
          <div className="familyHistory">
            <label>
              <input type="checkbox" />
              Eviction
            </label>
          </div>
          <div className="typesOfDebt"></div>
        </form>
      </div>
    </>
  );
};

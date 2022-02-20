/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { RuleFunction } from './rules';

export const layout: RuleFunction = ({ theme, sidebar }) => `
  md-grid {
    max-width: 100%;
    margin: 0;
  }

  .md-nav {
    font-size: calc(var(--md-typeset-font-size) * 0.9);
  }
  .md-nav__icon {
    width: auto !important;
    height: auto !important;
  }
  .md-nav__icon:after {
    width: 20px !important;
    height: 20px !important;
  }

  .md-main__inner {
    margin-top: 0;
    max-width: 100%;
  }

  .md-sidebar {
    position: fixed;
    bottom: 60px;
    width: 16rem;
  }
  .md-sidebar--secondary {
    right: ${theme.spacing(3)}px;
  }
  .md-sidebar__scrollwrap {
    max-height: 100%;
  }

  .md-content {
    max-width: calc(100% - 16rem * 2);
    margin-left: 16rem;
    margin-bottom: 50px;
  }

  .md-footer {
    position: fixed;
    bottom: 0px;
  }
  .md-footer__inner {
    max-width: 100%;
  }
  .md-footer__title {
    background-color: unset;
  }
  .md-footer-nav__link {
    width: 16rem;
  }

  .md-dialog {
    background-color: unset;
  }

  @media screen and (max-width: 76.1875em) {
    .md-header__button {
      margin: 0.4rem 0;
      margin-left: 0.4rem;
      padding: 0;
    }
    .md-overlay {
      left: 0;
    }

    .md-nav {
      transition: none !important;
      background-color: var(--md-default-bg-color)
    }
    .md-nav--primary .md-nav__title {
      cursor: auto;
      color: var(--md-default-fg-color);
      font-weight: 700;
      white-space: normal;
      line-height: 1rem;
      height: auto;
      display: flex;
      flex-flow: column;
      row-gap: 1.6rem;
      padding: 1.2rem .8rem .8rem;
      background-color: var(--md-default-bg-color);
    }
    .md-nav--primary .md-nav__title~.md-nav__list {
      box-shadow: none;
    }
    .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
      border-top: none;
    }
    .md-nav--primary .md-nav__title .md-nav__button {
      display: none;
    }
    .md-nav--primary .md-nav__title .md-nav__icon {
      color: var(--md-default-fg-color);
      position: static;
      height: auto;
      margin: 0 0 0 -0.2rem;
    }
    .md-nav--primary > .md-nav__title [for="none"] {
      padding-top: 0;
    }
    .md-nav--primary .md-nav__item {
      border-top: none;
    }
    .md-nav--primary :is(.md-nav__title,.md-nav__item) {
      font-size : var(--md-typeset-font-size);
    }
    .md-nav .md-source {
      display: none;
    }

    .md-sidebar--primary {
      width: 12.1rem !important;
      z-index: 200;
      left: ${
        sidebar.isPinned ? 'calc(242px - 12.1rem)' : 'calc(72px - 12.1rem)'
      } !important;
    }
    .md-sidebar--secondary:not([hidden]) {
      display: none;
    }

    .md-content {
      max-width: 100%;
      margin-left: 0;
    }

    .md-content__inner {
      padding: 0px;
      margin: 0px;
    }

    .md-footer {
      position: static;
      padding-left: 0;
    }
    .md-footer-nav__link {
      /* footer links begin to overlap at small sizes without setting width */
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    .md-sidebar--primary {
      left: -12.1rem !important;
      width: 12.1rem;
    }
  }
`;
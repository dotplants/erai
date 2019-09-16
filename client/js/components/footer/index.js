import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="text-left text-muted mt-4">
        <Breadcrumb>
          <BreadcrumbItem>
            Made with ♥ by
            <a
              href="https://dotplants.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            >
              .Plants
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a
              href="https://github.com/dotplants/erai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-Source
            </a>
          </BreadcrumbItem>
        </Breadcrumb>
      </footer>
    );
  }
}

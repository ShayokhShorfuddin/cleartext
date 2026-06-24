export function Footer() {
  return (
    <footer>
      <div className="flex gap-x-2">
        <p>Cleartext</p>
        <p>
          &copy; <span className="year">{new Date().getFullYear()}</span>{" "}
          Cleartext. Licensed under{" "}
          <a href="https://www.gnu.org/licenses/agpl-3.0.html">AGPL-3.0</a>
        </p>
      </div>

      {/* TODO: Needs more work here */}
    </footer>
  );
}

// TODO: Add AGPL license on Github

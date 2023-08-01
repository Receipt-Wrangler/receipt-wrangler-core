# Receipt Wrangler Core
## Building
1. make sure angular cli is installed by running `npm install -g @angular/cli`
2. run `npm i`
3. run `npm run build`

## Testing
1. run `npm run test`

## Development with desktop/mobile client
To test local changes in core, and see changes in desktop/mobile, try the following steps:

1. In core's root directory run `npm run build`
2. Run `npm link ./dist` from core's root directory
3. In either client's root directory run `npm link @noah231515/receipt-wrangler-core`
4. Optionally, run `ng build --watch` to build on file changes

After these steps, local changes made in core should appear and be usable in the linked app.

See more at https://docs.npmjs.com/cli/v9/commands/npm-link?v=true

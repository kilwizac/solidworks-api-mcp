---
type: method
interface: ISldWorks
member: Command
returns: System.Object
parameters:
  -
    name: Command
    type: System.Int32
    description: Command as defined by swCommand_e
  -
    name: Args
    type: System.Object
    description: See Remarks
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - commands
  - solidworks
  - files
  - open
  - dialog
  - file
  - command
  - isldworks
  - sld
  - works
  - int32
  - args
  - object
---

# ISldWorks.Command

Opens the specified dialog or file.

## Signature

```csharp
System.Object Command( 
   System.Int32
Command
,
   System.Object
Args
)
```
## Parameters

- `Command` (System.Int32): Command as defined by swCommand_e
- `Args` (System.Object): See Remarks

## Return Value

Unknown.

## Remarks

If command specified is...
Then pass...
swOpenHTMLHelp
Path and filename for the compiled HTML file (has .chm filename extension)
swFileOpen
swFileNew
swOpenRecentFile
Empty VARIANT; for example:
VARIANT args;
V_VT(&args) = VT_EMPTY;
// Call Command API and open the File, Open dialog
swApp->Command(0, args, &retval);
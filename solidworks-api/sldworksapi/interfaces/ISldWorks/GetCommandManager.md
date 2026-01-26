---
type: method
interface: ISldWorks
member: GetCommandManager
returns: CommandManager
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - command
  - manager
  - see
  - also
  - icommandmanager
  - getcommandmanager
  - isldworks
  - sld
  - works
  - cookie
  - int32
  - create
  - submenus
  - commandmanager
---

# ISldWorks.GetCommandManager

Gets the CommandManager for the specified add-in.

## Signature

```csharp
CommandManager GetCommandManager( 
   System.Int32
Cookie
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW

## Return Value

CommandManager

## Remarks

See
CommandManager and CommandGroups
for details.

## Examples

- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)
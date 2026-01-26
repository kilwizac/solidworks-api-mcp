---
type: method
interface: IModelDocExtension
member: SetApiUndoObject
returns: System.Boolean
parameters:
  -
    name: PHandler
    type: System.Object
    description: Undo object
  -
    name: DisplayName
    type: System.String
    description: Name to display in the SOLIDWORKS undo list
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - undo
  - setapiundoobject
  - imodeldocextension
  - model
  - doc
  - extension
  - api
  - object
  - handler
  - display
  - name
  - string
  - boolean
  - automate
  - add
  - commands
  - vba
---

# IModelDocExtension.SetApiUndoObject

Implements an undo object for an add-in application.

## Signature

```csharp
System.Boolean SetApiUndoObject( 
   System.Object
PHandler
,
   System.String
DisplayName
)
```
## Parameters

- `PHandler` (System.Object): Undo object
- `DisplayName` (System.String): Name to display in the SOLIDWORKS undo list

## Return Value

True if the undo object is implemented, false if not

## Examples

- Automate Add-in's Undo Commands (VBA) (Automate_Add-in_s_Undo_Commands_Example_VB.htm)
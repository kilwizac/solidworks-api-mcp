---
type: method
interface: ISldWorks
member: DefineMessageBar
returns: System.Object
parameters:
  -
    name: UniqueName
    type: System.String
    description: Unique ID of this message bar
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - definemessagebar
  - isldworks
  - sld
  - works
  - define
  - message
  - bar
  - unique
  - name
  - string
  - object
  - imessagebarhandler
---

# ISldWorks.DefineMessageBar

Called by a SOLIDWORKS add-in, creates a message bar definition object.

## Signature

```csharp
System.Object DefineMessageBar( 
   System.String
UniqueName
)
```
## Parameters

- `UniqueName` (System.String): Unique ID of this message bar

## Return Value

IMessageBarDefinition

## Remarks

It is the add-in's responsibility to ensure that the ID is unique by using, for example, a combination of add-in module name and unique message identifier:
"MyAddInName+ID_MYMESSAGE1"

## Examples

- IMessageBarHandler (ms-its:swpublishedapi.chm::/SolidWorks.Interop.swpublished~SolidWorks.Interop.swpublished.IMessageBarHandler.html)
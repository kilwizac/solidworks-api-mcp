---
type: method
interface: ISwOLEObject
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the OLE object to the selection list, false replaces the selection list with this OLE object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - select
  - iswoleobject
  - sw
  - ole
  - object
  - append
  - boolean
---

# ISwOLEObject.Select

Selects an OLE object.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
)
```
## Parameters

- `Append` (System.Boolean): True appends the OLE object to the selection list, false replaces the selection list with this OLE object

## Return Value

True if the OLE object is selected, false if it is not
---
type: method
interface: ISwOLEObject
member: SetActive
returns: System.Object
parameters:
  -
    name: Active
    type: System.Boolean
    description: True activates the OLE object, false deactivates the OLE object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - setactive
  - iswoleobject
  - sw
  - ole
  - object
  - active
  - boolean
  - activate
  - vba
---

# ISwOLEObject.SetActive

Activates or deactivates the OLE object.

## Signature

```csharp
System.Object SetActive( 
   System.Boolean
Active
)
```
## Parameters

- `Active` (System.Boolean): True activates the OLE object, false deactivates the OLE object

## Return Value

True gets the activated OLE object, false returns null

## Examples

- Activate OLE Object (VBA) (Activate_OLE_Object_Example_VB.htm)
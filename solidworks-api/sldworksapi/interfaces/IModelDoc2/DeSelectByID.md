---
type: method
interface: IModelDoc2
member: DeSelectByID
returns: System.Boolean
parameters:
  -
    name: SelID
    type: System.String
    description: ID of object
  -
    name: SelParams
    type: System.String
    description: Type name of object (uppercase)
  -
    name: X
    type: System.Double
    description: X selection location
  -
    name: Y
    type: System.Double
    description: Z selection location
  -
    name: Z
    type: System.Double
    description: Z selection location
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related: []
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - deselect
  - deselectbyid
  - imodeldoc2
  - model
  - doc2
  - de
  - select
  - id
  - sel
  - string
  - params
  - double
  - boolean
  - rotate
  - scale
  - copy
  - sketch
  - vb
  - net
  - vba
---

# IModelDoc2.DeSelectByID

Removes the selected object from the selection list.

## Signature

```csharp
System.Boolean DeSelectByID( 
   System.String
SelID
,
   System.String
SelParams
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `SelID` (System.String): ID of object
- `SelParams` (System.String): Type name of object (uppercase)
- `X` (System.Double): X selection location
- `Y` (System.Double): Z selection location
- `Z` (System.Double): Z selection location

## Return Value

True if object is deselected, false otherwise

## Remarks

See
IModelDocExtension::SelectByID2
for more information about selections.

## Examples

- Rotate, Scale, and Copy Sketch (C#) (Rotate_Scale_Copy_Sketch_Example_CSharp.htm)
- Rotate, Scale, and Copy Sketch (VB.NET) (Rotate_Scale_Copy_Sketch_Example_VBNET.htm)
- Rotate, Scale, and Copy Sketch (VBA) (Rotate_Scale_Copy_Sketch_Example_VB.htm)
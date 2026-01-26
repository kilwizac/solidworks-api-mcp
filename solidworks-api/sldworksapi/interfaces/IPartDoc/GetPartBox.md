---
type: method
interface: IPartDoc
member: GetPartBox
returns: System.Object
parameters:
  -
    name: NoConversion
    type: System.Boolean
    description: Convert to user units or not; true retains system units, false changes to user units
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IComponent2.GetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - bounding
  - box
  - parts
  - see
  - also
  - ipartdoc
  - getpartbox
  - part
  - doc
  - no
  - conversion
  - boolean
  - object
  - vba
---

# IPartDoc.GetPartBox

Gets the box enclosing the part.

## Signature

```csharp
System.Object GetPartBox( 
   System.Boolean
NoConversion
)
```
## Parameters

- `NoConversion` (System.Boolean): Convert to user units or not; true retains system units, false changes to user units

## Return Value

Array of 6 doubles containing the 2 diagonal points that bound the part

## Remarks

The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.
The X,Y,Z points returned are the lower- and upper-diagonal corners that bound the part with the box sides parallel to the X, Y and Z axes. The box dimensions returned enclose the part and usually close to the minimum possible size, but this is not guaranteed.

## Examples

- Get Part Bounding Box (VBA) (Get_Part_Bounding_Box_Example_VB.htm)

## See Also

- `IComponent2.GetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`
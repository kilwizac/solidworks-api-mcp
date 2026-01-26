---
type: method
interface: IDrawingDoc
member: AddChamferDim
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X dimension
  -
    name: Y
    type: System.Double
    description: Y dimension
  -
    name: Z
    type: System.Double
    description: Z dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDimension.GetSystemChamferValues
  - IDrawingDoc.IAddChamferDim
keywords:
  - chamfers
  - see
  - also
  - ichamferfeaturedata2
  - dimensions
  - dimension
  - idimension
  - chamfer
  - addchamferdim
  - idrawingdoc
  - drawing
  - doc
  - add
  - dim
  - double
  - object
---

# IDrawingDoc.AddChamferDim

Adds a chamfer dimension.

## Signature

```csharp
System.Object AddChamferDim( 
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

- `X` (System.Double): X dimension
- `Y` (System.Double): Y dimension
- `Z` (System.Double): Z dimension

## Return Value

Pointer to the newly created chamfer dimension

## See Also

- `IDimension.GetSystemChamferValues`
- `IDrawingDoc.IAddChamferDim`
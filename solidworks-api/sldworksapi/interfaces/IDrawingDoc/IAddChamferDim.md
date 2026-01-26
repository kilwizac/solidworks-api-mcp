---
type: method
interface: IDrawingDoc
member: IAddChamferDim
returns: DisplayDimension
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
  - IDrawingDoc.AddChamferDim
keywords:
  - chamfers
  - see
  - also
  - ichamferfeaturedata2
  - dimensions
  - dimension
  - idimension
  - chamfer
  - iaddchamferdim
  - idrawingdoc
  - drawing
  - doc
  - add
  - dim
  - double
  - display
---

# IDrawingDoc.IAddChamferDim

Adds a chamfer dimension.

## Signature

```csharp
DisplayDimension IAddChamferDim( 
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
- `IDrawingDoc.AddChamferDim`
---
type: method
interface: IModelDocExtension
member: AddPathLengthDim
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of display dimension
  -
    name: Y
    type: System.Double
    description: Y coordinate of display dimension
  -
    name: Z
    type: System.Double
    description: Z coordinate of display dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - path
  - length
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - lengths
  - addpathlengthdim
  - imodeldocextension
  - model
  - doc
  - extension
  - add
  - dim
  - double
  - object
  - create
  - vba
  - vb
  - net
---

# IModelDocExtension.AddPathLengthDim

Inserts a path length dimension at the specified coordinates for a selected path.

## Signature

```csharp
System.Object AddPathLengthDim( 
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

- `X` (System.Double): X coordinate of display dimension
- `Y` (System.Double): Y coordinate of display dimension
- `Z` (System.Double): Z coordinate of display dimension

## Return Value

IDisplayDimension

## Remarks

Before calling this method to create a path length dimension:
If a path...
Then...
Exists
Call
IModelDocExtension::SelectByID2
to select one sketch segment on the existing path.
Does not exist
Call IModelDocExtension::SelectByID2 to select two or more sketch segments that are end-to-end coincident and form a single chain.
Call
ISketchManager::MakeSketchChain
to create a path with the selected sketch segments.
Call IModelDocExtension::SelectByID2 to select one sketch segment on the path.

## Examples

- Create Path Length Dimension (VBA) (Create_Path_Length_Dimension_Example_VB.htm)
- Create Path Length Dimension (VB.NET) (Create_Path_Length_Dimension_Example_VBNET.htm)
- Create Path Length Dimension (C#) (Create_Path_Length_Dimension_Example_CSharp.htm)
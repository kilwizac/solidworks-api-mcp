---
type: method
interface: IMacroFeatureData
member: IAddDisplayDimensions
returns: void
parameters:
  -
    name: DimCount
    type: System.Int32
    description: Number of display dimensions
  -
    name: DimTypes
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of display dimension types as defined swDimensionType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: DimValues
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of display dimension values VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - iadddisplaydimensions
  - imacrofeaturedata
  - macro
  - feature
  - data
  - add
  - display
  - dimensions
  - dim
  - count
  - int32
  - types
  - values
  - double
  - void
---

# IMacroFeatureData.IAddDisplayDimensions

Adds the specified display dimensions to this macro feature.

## Signature

```csharp
void IAddDisplayDimensions( 
   System.Int32
DimCount
,
   ref System.Int32
DimTypes
,
   ref System.Double
DimValues
)
```
## Parameters

- `DimCount` (System.Int32): Number of display dimensions
- `DimTypes` (System.Int32): in-process, unmanaged C++: Pointer to an array of display dimension types as defined swDimensionType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `DimValues` (System.Double): in-process, unmanaged C++: Pointer to an array of display dimension values VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.
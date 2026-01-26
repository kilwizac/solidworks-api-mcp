---
type: method
interface: ILibraryFeatureData
member: IGetDimensions
returns: System.Double
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of dimension as defined in swLibraryFeatDimensionType_e
  -
    name: Count
    type: System.Int32
    description: Number of dimensions
  -
    name: DimName
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of dimension names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - ILibraryFeatureData.GetDimensions
  - ILibraryFeatureData.OverrideDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - library
  - feature
  - ilibraryfeaturedata
  - references
  - dimensions
  - igetdimensions
  - data
  - type
  - int32
  - count
  - dim
  - name
  - string
  - double
---

# ILibraryFeatureData.IGetDimensions

Gets the names and values of the specified type of dimension for this library feature.

## Signature

```csharp
System.Double IGetDimensions( 
   System.Int32
Type
,
   System.Int32
Count
,
   out System.String
DimName
)
```
## Parameters

- `Type` (System.Int32): Type of dimension as defined in swLibraryFeatDimensionType_e
- `Count` (System.Int32): Number of dimensions
- `DimName` (System.String): in-process, unmanaged C++: Pointer to an array of dimension names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of dimension values VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILibraryFeatureData::GetDimensionsCount
to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.GetDimensions`
- `ILibraryFeatureData.OverrideDimension`
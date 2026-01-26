---
type: method
interface: ILibraryFeatureData
member: SetDimension
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of dimension as defined in swLibFeatDimensionType_e
  -
    name: DimName
    type: System.String
    description: Name of dimension
  -
    name: DimVal
    type: System.Double
    description: Name of dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - ILibraryFeatureData.GetDimensions
  - ILibraryFeatureData.GetDimensionsCount
  - ILibraryFeatureData.IGetDimensions
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - dimension
  - idimension
  - setdimension
  - data
  - type
  - int32
  - dim
  - name
  - string
  - val
  - double
  - boolean
---

# ILibraryFeatureData.SetDimension

Sets a dimension's type, name, and value for the library feature.

## Signature

```csharp
System.Boolean SetDimension( 
   System.Int32
Type
,
   System.String
DimName
,
   System.Double
DimVal
)
```
## Parameters

- `Type` (System.Int32): Type of dimension as defined in swLibFeatDimensionType_e
- `DimName` (System.String): Name of dimension
- `DimVal` (System.Double): Name of dimension

## Return Value

True is the dimension is set, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.GetDimensions`
- `ILibraryFeatureData.GetDimensionsCount`
- `ILibraryFeatureData.IGetDimensions`
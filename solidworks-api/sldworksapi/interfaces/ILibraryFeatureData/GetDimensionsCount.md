---
type: method
interface: ILibraryFeatureData
member: GetDimensionsCount
returns: System.Int32
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of dimension as defined in swLibraryFeatDimensionType_e
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
  - getdimensionscount
  - data
  - count
  - type
  - int32
  - vba
  - vb
  - net
---

# ILibraryFeatureData.GetDimensionsCount

Gets the number of dimensions of the specified type for this library feature.

## Signature

```csharp
System.Int32 GetDimensionsCount( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of dimension as defined in swLibraryFeatDimensionType_e

## Return Value

Number of dimensions

## Remarks

Call this method before calling
ILibraryFeatureData::IGetDimensions
to determine the size of the size of the array.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.GetDimensions`
- `ILibraryFeatureData.OverrideDimension`
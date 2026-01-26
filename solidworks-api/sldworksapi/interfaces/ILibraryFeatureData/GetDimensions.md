---
type: method
interface: ILibraryFeatureData
member: GetDimensions
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of dimension as defined in swLibFeatDimensionType_e
  -
    name: DimName
    type: System.Object
    description: Array of the dimension names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - ILibraryFeatureData.GetDimensionsCount
  - ILibraryFeatureData.IGetDimensions
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
  - getdimensions
  - data
  - type
  - int32
  - dim
  - name
  - object
  - vba
  - vb
  - net
---

# ILibraryFeatureData.GetDimensions

Gets the names and values of the specified type of dimension for this library feature.

## Signature

```csharp
System.Object GetDimensions( 
   System.Int32
Type
,
   out System.Object
DimName
)
```
## Parameters

- `Type` (System.Int32): Type of dimension as defined in swLibFeatDimensionType_e
- `DimName` (System.Object): Array of the dimension names

## Return Value

Array of the values of the dimensions

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.GetDimensionsCount`
- `ILibraryFeatureData.IGetDimensions`
- `ILibraryFeatureData.OverrideDimension`
---
type: method
interface: ILibraryFeatureData
member: GetReferencesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetReferences
  - ILibraryFeatureData.ISetReferences
  - ILibraryFeatureData.SetReferences
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - features
  - getreferencescount
  - data
  - count
  - int32
  - vba
  - vb
  - net
---

# ILibraryFeatureData.GetReferencesCount

Gets the number of references for the library feature.

## Signature

```csharp
System.Int32 GetReferencesCount()
```
## Parameters

None.

## Return Value

Number of references

## Remarks

Call this method before calling
ILibraryFeatureData::IGetReferences
.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.GetReferences`
- `ILibraryFeatureData.ISetReferences`
- `ILibraryFeatureData.SetReferences`
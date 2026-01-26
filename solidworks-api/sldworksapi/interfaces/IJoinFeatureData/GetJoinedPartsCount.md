---
type: method
interface: IJoinFeatureData
member: GetJoinedPartsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IJoinFeatureData.ISetJoinedParts
  - IJoinFeatureData.JoinedParts
keywords:
  - getjoinedpartscount
  - ijoinfeaturedata
  - join
  - feature
  - data
  - joined
  - parts
  - count
  - int32
  - insert
  - vb
  - net
  - vba
---

# IJoinFeatureData.GetJoinedPartsCount

Gets the number of joined parts.

## Signature

```csharp
System.Int32 GetJoinedPartsCount()
```
## Parameters

None.

## Return Value

Number of joined parts

## Remarks

Call this method before calling
IJoinFeatureData::IGetJoinedParts
to determine the size of the array.

## Examples

- Insert Join Feature (C#) (Insert_Join_Feature_Example_CSharp.htm)
- Insert Join Feature (VB.NET) (Insert_Join_Feature_Example_VBNET.htm)
- Insert Join Feature (VBA) (Insert_Join_Feature_Example_VB.htm)

## See Also

- `IJoinFeatureData.ISetJoinedParts`
- `IJoinFeatureData.JoinedParts`
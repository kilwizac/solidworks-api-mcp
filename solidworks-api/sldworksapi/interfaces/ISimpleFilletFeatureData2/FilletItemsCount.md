---
type: property
interface: ISimpleFilletFeatureData2
member: FilletItemsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.GetFilletItemAtIndex
  - ISimpleFilletFeatureData2.GetRadius
  - ISimpleFilletFeatureData2.IGetFilletItemAtIndex
  - ISimpleFilletFeatureData2.IGetRadius
  - ISimpleFilletFeatureData2.ISetRadius
  - ISimpleFilletFeatureData2.SetRadius
keywords:
  - filletitemscount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - items
  - count
  - int32
readonly: true
---

# ISimpleFilletFeatureData2.FilletItemsCount

Gets the number of fillets for this simple fillet feature.

## Signature

```csharp
System.Int32 FilletItemsCount {get;}
```
## Parameters

None.

## Return Value

Number of fillets

## Remarks

This method returns -1 if this simple fillet feature is not multiple radius.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleFilletFeatureData2.GetFilletItemAtIndex`
- `ISimpleFilletFeatureData2.GetRadius`
- `ISimpleFilletFeatureData2.IGetFilletItemAtIndex`
- `ISimpleFilletFeatureData2.IGetRadius`
- `ISimpleFilletFeatureData2.ISetRadius`
- `ISimpleFilletFeatureData2.SetRadius`
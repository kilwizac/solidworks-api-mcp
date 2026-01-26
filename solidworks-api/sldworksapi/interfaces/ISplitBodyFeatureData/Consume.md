---
type: property
interface: ISplitBodyFeatureData
member: Consume
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeatureManager.PostSplitBody
  - IFeatureManager.PreSplitBody
keywords:
  - consume
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - boolean
  - create
  - vba
  - vb
  - net
readonly: null
---

# ISplitBodyFeatureData.Consume

Gets or sets whether the bodies in this Split feature are consumed.

## Signature

```csharp
System.Boolean Consume {get; set;}
```
## Parameters

None.

## Return Value

True if the Split bodies are consumed, false if not

## Remarks

Consumed means the split bodies are removed from the part and do not appear in the Solid Bodies folder of the FeatureManager design tree.

## Examples

- Create Split Feature (VBA) (Create_Split-body_Feature_Example_VB.htm)
- Create Split Feature (VB.NET) (Create_Split-body_Feature_Example_VBNET.htm)
- Create Split Feature (C#) (Create_Split-body_Feature_Example_CSharp.htm)

## See Also

- `IFeatureManager.PostSplitBody`
- `IFeatureManager.PreSplitBody`
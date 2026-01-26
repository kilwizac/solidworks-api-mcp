---
type: method
interface: IFeatureManager
member: PreSplitBody2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.GetSplitBodies
  - ISplitBodyFeatureData.SetSplitBodies2
keywords:
  - feature
  - see
  - also
  - ifeature
  - split
  - body
  - isplitbodyfeaturedata
  - presplitbody2
  - ifeaturemanager
  - manager
  - pre
  - body2
  - object
  - create
  - vba
  - vb
  - net
---

# IFeatureManager.PreSplitBody2

Gets all of the bodies created by splitting a part.

## Signature

```csharp
System.Object PreSplitBody2()
```
## Parameters

None.

## Return Value

Array of bodies that result from splitting a part (see Remarks )

## Remarks

The difference between this method and the now obsolete IFeatureManager::PreSplitBody is that this method supports the splitting of surfaces.
To create a Split feature:
Select the cutting tools to use to split the part into multiple bodies.
Call this method to get all of the split bodies.
Create the Split feature using
IFeatureManager::PostSplitBody
.
To find out whether the bodies in a Split feature are consumed, use
ISplitBodyFeatureData::Consume
.

## Examples

- Create Split Feature (VBA) (Create_Split-body_Feature_Example_VB.htm)
- Create Split Feature (VB.NET) (Create_Split-body_Feature_Example_VBNET.htm)
- Create Split Feature (C#) (Create_Split-body_Feature_Example_CSharp.htm)

## See Also

- `ISplitBodyFeatureData.GetSplitBodies`
- `ISplitBodyFeatureData.SetSplitBodies2`
---
type: method
interface: IFeatureManager
member: PreSplitBody
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - presplitbody
  - ifeaturemanager
  - feature
  - manager
  - pre
  - split
  - body
  - object
---

# IFeatureManager.PreSplitBody

Obsolete. Superseded by IFeatureManager::PreSplitBody2.

## Signature

```csharp
System.Object PreSplitBody()
```
## Parameters

None.

## Return Value

Array of bodies that result from splitting a body

## Remarks

To create a split-body feature:
Select the cutting tools.
Call this method to get all of the bodies that will result from the split operation.
Create the split-body feature using
IFeatureManager::PostSplitBody
.
To find out if the bodies in a split-body feature were consumed, use
ISplitBodyFeatureData::Consume
.
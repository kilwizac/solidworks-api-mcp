---
type: method
interface: IFeature
member: GetUpdateStamp
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IModelDoc2.GetUpdateStamp
keywords:
  - update
  - stamp
  - parents
  - features
  - getupdatestamp
  - ifeature
  - feature
  - int32
---

# IFeature.GetUpdateStamp

Gets the current update stamp for this feature.

## Signature

```csharp
System.Int32 GetUpdateStamp()
```
## Parameters

None.

## Return Value

Current update stamp value for this feature

## Remarks

The update stamp is an integer form of the time stamp.
Update stamps are incremented each time the definition of the feature is modified by executing
Edit Definition
or changing the sketch used to generate the feature.
The update stamp of a feature is also incremented when its parent feature changes. Additionally if a feature is dependent on the body, or some other feature for regeneration, then the update stamp of the feature is incremented any time the body changes or the other related feature changes. These types of relationships might not seem typical parent and child relationships.
SOLIDWORKS does not track the affect that all features have on each other. If the topology of a feature is modified by another feature, then its update stamp might not be incremented. For example, if you add a fillet to the to edge of a hole, the update stamp of the hole does not change. This type of tracking is not required by
SOLIDWORKS and is time consuming for larger parts.
It is a good idea to consider the entire body (and its topology) invalid when any of the feature time stamps within the model are incremented. For example, if a user creates a simple block containing a thru-hole feature and the user then adds a third feature (filling in a portion of the hole), the resulting solid body now looks very different, for example, to a machining package. The machining package no longer wants to drill the entire thru-hole. However, neither the creation, nor the editing, of the third feature caused the update stamp of the hole feature to be incremented. Therefore, it might be best for the machining package to re-obtain all body topology to avoid machining errors. Depending on what your software is trying to accomplish, you might want to consider the same.

## See Also

- `IModelDoc2.GetUpdateStamp`
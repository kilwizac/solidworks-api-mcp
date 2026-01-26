---
type: property
interface: IComment
member: FeatureOwner
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - featureowner
  - icomment
  - comment
  - feature
  - owner
readonly: true
---

# IComment.FeatureOwner

Gets the feature that owns this comment.

## Signature

```csharp
Feature FeatureOwner {get;}
```
## Parameters

None.

## Return Value

Pointer to the IFeature object that owns this comment

## Remarks

If the comment is not owned by a feature, then NULL is returned.
Because you cannot set the name of comment owned by a feature, use this property before using
IComment::Name
to determine if the comment is owned by a feature.
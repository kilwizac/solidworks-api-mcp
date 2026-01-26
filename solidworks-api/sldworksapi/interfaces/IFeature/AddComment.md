---
type: method
interface: IFeature
member: AddComment
returns: Comment
parameters:
  -
    name: Text
    type: System.String
    description: Comment to add to this feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IComment.Delete
  - ICommentFolder.AddComment
  - IModelDocExtension.AddComment
keywords:
  - comment
  - see
  - also
  - icomment
  - feature
  - addcomment
  - ifeature
  - add
  - text
  - string
---

# IFeature.AddComment

Adds a comment to this feature.

## Signature

```csharp
Comment AddComment( 
   System.String
Text
)
```
## Parameters

- `Text` (System.String): Comment to add to this feature

## Return Value

Pointer to the IComment object

## Remarks

The comment is added in the
Comment folder
, but the comment is associated with this feature.
If your pointer is on the feature in the FeatureManager design tree, then the comment is displayed as a ToolTip.

## See Also

- `IComment.Delete`
- `ICommentFolder.AddComment`
- `IModelDocExtension.AddComment`
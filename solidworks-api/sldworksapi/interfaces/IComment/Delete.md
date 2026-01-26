---
type: method
interface: IComment
member: Delete
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICommentFolder.AddComment
  - IFeature.AddComment
  - IModelDocExtension.AddComment
keywords:
  - delete
  - icomment
  - comment
  - boolean
---

# IComment.Delete

Deletes a comment.

## Signature

```csharp
System.Boolean Delete()
```
## Parameters

None.

## Return Value

True if the comment is deleted, false if not

## Remarks

The comment to delete must not be selected in the FeatureManager design tree. Use
IModelDoc2::ClearSelection2
to ensure that the comment is not currently selected.
You must rebuild the FeatureManager design tree after deleting the comment. Use
IFeatureManager::UpdateFeatureTree
to perform this action.

## See Also

- `ICommentFolder.AddComment`
- `IFeature.AddComment`
- `IModelDocExtension.AddComment`
---
type: method
interface: IFeatureManager
member: DraftXpertRemove
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.DraftXpertChange
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - draftxpert
  - draftxpertremove
  - ifeaturemanager
  - feature
  - manager
  - draft
  - xpert
  - remove
---

# IFeatureManager.DraftXpertRemove

Deletes the draft on the selected faces. If all the faces of a draft are selected, then this method deletes the draft feature; if not, then this method edits the draft feature and removes the selected face references from it.

## Signature

```csharp
Feature DraftXpertRemove()
```
## Parameters

None.

## Return Value

Pointer to the feature

## See Also

- `IFeatureManager.DraftXpertChange`
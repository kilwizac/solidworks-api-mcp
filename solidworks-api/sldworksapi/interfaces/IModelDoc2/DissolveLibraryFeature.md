---
type: method
interface: IModelDoc2
member: DissolveLibraryFeature
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - ILibraryFeatureData
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - dissolve
  - dissolvelibraryfeature
  - imodeldoc2
  - model
  - doc2
  - boolean
---

# IModelDoc2.DissolveLibraryFeature

Dissolves the selected library features.

## Signature

```csharp
System.Boolean DissolveLibraryFeature()
```
## Parameters

None.

## Return Value

True if the selected library features are dissolved, false if not

## Remarks

This method dissolves all library features that are selected when it executes. Only the selected library features are dissolved, anything else selected is ignored.
To create a library feature, use
IModelDoc2::InsertLibraryFeature
.

## See Also

- `ILibraryFeatureData`
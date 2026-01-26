---
type: property
interface: IDocumentSpecification
member: LoadExternalReferencesInMemory
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - loadexternalreferencesinmemory
  - idocumentspecification
  - document
  - specification
  - load
  - external
  - references
  - memory
  - boolean
readonly: null
---

# IDocumentSpecification.LoadExternalReferencesInMemory

Gets or sets whether to load external references in memory when opening a document.

## Signature

```csharp
System.Boolean LoadExternalReferencesInMemory {get; set;}
```
## Parameters

None.

## Return Value

True to load external references in memory, false (default) to not

## Remarks

This property is:
not valid for opening
3D
EXPERIENCE files using
SOLIDWORKS Design Augmented
.
valid only if
swUserPreferenceIntegerValue_e
.swLoadExternalReferences is not set to
swLoadExternalReferences_e
.swLoadExternalReferences_None.
Note: The
System Options > External References > Load documents in memory only
user preference and
swUserPreferenceToggle_e
.swExtRefLoadRefDocsInMemory are ignored when opening documents through the API because this method and
ISldWorks::OpenDoc6
(
swOpenDocOptions_e
.swOpenDocOptions_LoadExternalReferencesInMemory) have sole control of reference loading.
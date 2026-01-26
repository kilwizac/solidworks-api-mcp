---
type: property
interface: IModelDocExtension
member: NeedsRebuild
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - needsrebuild
  - imodeldocextension
  - model
  - doc
  - extension
  - needs
  - rebuild
  - boolean
readonly: true
---

# IModelDocExtension.NeedsRebuild

Obsolete. Superseded by IModelDocExtension::NeedsRebuild2.

## Signature

```csharp
System.Boolean NeedsRebuild {get;}
```
## Parameters

None.

## Return Value

True if document needs to be rebuilt, false if not

## Remarks

Because this now obsoleted property does not recognize frozen features, use
IModelDocExtension::NeedsRebuild2
, which does.
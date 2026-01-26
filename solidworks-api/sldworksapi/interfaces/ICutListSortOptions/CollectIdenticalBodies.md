---
type: property
interface: ICutListSortOptions
member: CollectIdenticalBodies
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - collectidenticalbodies
  - icutlistsortoptions
  - cut
  - list
  - sort
  - options
  - collect
  - identical
  - bodies
  - boolean
readonly: null
---

# ICutListSortOptions.CollectIdenticalBodies

Gets or sets whether to collect identical bodies into a cut list sub-folder.

## Signature

```csharp
System.Boolean CollectIdenticalBodies {get; set;}
```
## Parameters

None.

## Return Value

True to collect identical bodies, false to not

## Remarks

If set to true, this property puts all bodies that are geometrically identical, but generated in different features, into a cut list item sub-folder in the FeatureManager design tree.
If this is a weldment, identical bodies do not move between weldment sub-folders during the sort.

## Examples

- ICutListSortOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICutListSortOptions)
---
type: method
interface: IView
member: ImportAnnotations
returns: void
parameters:
  -
    name: IncludeDesignAnnotations
    type: System.Boolean
    description: True to import design annotations, false to not
  -
    name: IncludeCosmeticThreads
    type: System.Boolean
    description: True to import cosmetic threads, false to not
  -
    name: IncludeDimXpertAnnotations
    type: System.Boolean
    description: True to import DimXpert annotations, false to not
  -
    name: IncludeHiddenFeatureItems
    type: System.Boolean
    description: True to import hidden feature items, false to not
  -
    name: Include3DViewAnnotations
    type: System.Boolean
    description: True to import 3D view annotations, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - file-io
  - ui
related: []
keywords:
  - importannotations
  - iview
  - view
  - import
  - annotations
  - include
  - design
  - boolean
  - cosmetic
  - threads
  - dim
  - xpert
  - hidden
  - feature
  - items
  - include3
  - void
---

# IView.ImportAnnotations

Imports the specified annotations into this drawing view.

## Signature

```csharp
void ImportAnnotations( 
   System.Boolean
IncludeDesignAnnotations
,
   System.Boolean
IncludeCosmeticThreads
,
   System.Boolean
IncludeDimXpertAnnotations
,
   System.Boolean
IncludeHiddenFeatureItems
,
   System.Boolean
Include3DViewAnnotations
)
```
## Parameters

- `IncludeDesignAnnotations` (System.Boolean): True to import design annotations, false to not
- `IncludeCosmeticThreads` (System.Boolean): True to import cosmetic threads, false to not
- `IncludeDimXpertAnnotations` (System.Boolean): True to import DimXpert annotations, false to not
- `IncludeHiddenFeatureItems` (System.Boolean): True to import hidden feature items, false to not
- `Include3DViewAnnotations` (System.Boolean): True to import 3D view annotations, false to not

## Return Value

Unknown.
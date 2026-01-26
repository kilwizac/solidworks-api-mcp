---
type: property
interface: ISldWorks
member: EnableFileMenu
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.Toolbars
keywords:
  - files
  - open
  - document
  - toolbars
  - menus
  - enable
  - file
  - related
  - disable
  - enablefilemenu
  - isldworks
  - sld
  - works
  - menu
  - boolean
readonly: null
---

# ISldWorks.EnableFileMenu

Gets or sets whether to enable file-related menus and toolbars.

## Signature

```csharp
System.Boolean EnableFileMenu {get; set;}
```
## Parameters

None.

## Return Value

True to enable file-related menus and toolbars (e.g., open a document, create a new document, open a recent document, etc.,); false to disable file-related menus and toolbars

## See Also

- `IModelDoc2.Toolbars`
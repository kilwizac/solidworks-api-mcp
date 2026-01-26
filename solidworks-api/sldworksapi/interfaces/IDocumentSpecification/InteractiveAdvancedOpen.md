---
type: property
interface: IDocumentSpecification
member: InteractiveAdvancedOpen
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - advanced
  - open
  - assemblies
  - see
  - also
  - iassemblydoc
  - document
  - drawings
  - idrawingdoc
  - parts
  - ipartdoc
  - interactiveadvancedopen
  - idocumentspecification
  - specification
  - interactive
  - boolean
  - dialog
  - vba
  - vb
  - net
readonly: null
---

# IDocumentSpecification.InteractiveAdvancedOpen

Gets whether to display an intermediate dialog, which allows the interactive user to set options before opening a document.

## Signature

```csharp
System.Boolean InteractiveAdvancedOpen {get; set;}
```
## Parameters

None.

## Return Value

True to display an intermediate dialog to the interactive user, false to not (default)

## Remarks

This property is not valid for opening
3D
EXPERIENCE files using
SOLIDWORKS Design Augmented
.

## Examples

- Open Advanced Dialog On Document Open (VBA) (Open_Advanced_Dialog_On_Open_Example_VB.htm)
- Open Advanced Dialog On Document Open (VB.NET) (Open_Advanced_Dialog_On_Open_Example_VBNET.htm)
- Open Advanced Dialog On Document Open (C#) (Open_Advanced_Dialog_On_Open_Example_CSharp.htm)
---
type: method
interface: ISldWorks
member: GetOpenDocSpec
returns: System.Object
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name of the document to open
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related: []
keywords:
  - document
  - specifications
  - open
  - getopendocspec
  - isldworks
  - sld
  - works
  - doc
  - spec
  - file
  - name
  - string
  - object
  - hide
  - all
  - edges
  - drawing
  - view
  - vba
  - read
  - only
  - whether
  - components
  - are
  - loaded
  - vb
  - net
  - assembly
---

# ISldWorks.GetOpenDocSpec

Gets the specifications to use when opening a model document.

## Signature

```csharp
System.Object GetOpenDocSpec( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name of the document to open

## Return Value

Document specification

## Examples

- Hide All Edges in Drawing View (VBA) (Hide_All_Edges_in_Drawing_View_Example_VB.htm)
- Open Drawing Document Read-only (VBA) (Open_Drawing_Document_Read-only_Example_VB.htm)
- Get Whether Components Are Loaded (C#) (Get_Whether_Components_Are_Loaded_Example_CSharp.htm)
- Get Whether Components Are Loaded (VB.NET) (Get_Whether_Components_Are_Loaded_Example_VBNET.htm)
- Get Whether Components Are Loaded (VBA) (Get_Whether_Components_Are_Loaded_Example_VB.htm)
- Open Assembly Document (C#) (Open_Assembly_Document_Example_CSharp.htm)
- Open Assembly Document (VB.NET) (Open_Assembly_Document_Example_VBNET.htm)
- Open Assembly Document (VBA) (Open_Assembly_Document_Example_VB.htm)
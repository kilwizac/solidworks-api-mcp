---
type: property
interface: IModelDoc2
member: Visible
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - document
  - visibility
  - model
  - documents
  - see
  - also
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - visible
  - doc2
  - boolean
  - names
  - open
  - vba
  - run
  - attach
  - solidworks
  - session
  - components
  - window
  - handles
  - dibsections
  - vb
  - net
readonly: null
---

# IModelDoc2.Visible

Gets or sets the visibility of the active document.

## Signature

```csharp
System.Boolean Visible {get; set;}
```
## Parameters

None.

## Return Value

True if the document is visible, false if not

## Remarks

User-interface resources are not released by setting this property to false. Opening large numbers of models and then hiding them using this property will eventually cause critical resource shortages and instability.
Instead of setting this property to false to hide a document, consider calling
ISldWorks::CloseDoc
to release its user-interface resources. Or open the document invisibly using
ISldWorks::DocumentVisible
.

## Examples

- Get Names of Open Documents (VBA) (Get_Names_of_Open_Documents_Example_VB.htm)
- Run or Attach to SOLIDWORKS Session (VBA) (SOLIDWORKS_Visible_or_BackGround_Example_VB.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)
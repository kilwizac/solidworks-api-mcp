---
type: property
interface: ISheet
member: CustomPropertyView
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - sheet
  - see
  - also
  - isheet
  - custom
  - information
  - custompropertyview
  - view
  - string
readonly: null
---

# ISheet.CustomPropertyView

Gets or sets the drawing view to use to set the custom information for this drawing sheet.

## Signature

```csharp
System.String CustomPropertyView {get; set;}
```
## Parameters

None.

## Return Value

Name of the drawing view from which to get the custom information

## Remarks

You can also use
IDrawingDoc::SetupSheet4
to set the name of the drawing view to use to set the custom information for this drawing sheet.
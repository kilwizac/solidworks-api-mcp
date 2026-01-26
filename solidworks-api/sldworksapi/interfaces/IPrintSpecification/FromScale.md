---
type: property
interface: IPrintSpecification
member: FromScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPrintSpecification.ToScale
keywords:
  - print
  - specification
  - fromscale
  - iprintspecification
  - scale
  - double
readonly: null
---

# IPrintSpecification.FromScale

Gets or sets the custom "from" scale factor for the current drawing sheet.

## Signature

```csharp
System.Double FromScale {get; set;}
```
## Parameters

None.

## Return Value

"From" scale factor in the From:To scale

## Remarks

This property is valid only if
IPrintSpecification::ScaleMethod
is set to
swPrintSelectionScaleFactor_e
.swPrintSelection.
For details about applying a scale factor to the current drawing sheet, see the
Print Specification
Help topic in the SOLIDWORKS Help.

## Examples

- IPrintSpecification (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrintSpecification)

## See Also

- `IPrintSpecification.ToScale`
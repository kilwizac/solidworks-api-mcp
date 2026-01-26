---
type: property
interface: IPrintSpecification
member: ToScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPrintSpecification.FromScale
keywords:
  - print
  - specification
  - toscale
  - iprintspecification
  - scale
  - double
readonly: null
---

# IPrintSpecification.ToScale

Gets or sets the custom "to" scale factor for the current drawing sheet.

## Signature

```csharp
System.Double ToScale {get; set;}
```
## Parameters

None.

## Return Value

"To" scale factor in the From:To scale

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

- `IPrintSpecification.FromScale`
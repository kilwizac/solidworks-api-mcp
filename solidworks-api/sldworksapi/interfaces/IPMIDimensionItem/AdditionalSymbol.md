---
type: property
interface: IPMIDimensionItem
member: AdditionalSymbol
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - additionalsymbol
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - additional
  - symbol
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDimensionItem.AdditionalSymbol

Gets the tolerance zone modifier for this PMI dimension item.

## Signature

```csharp
System.Int32 AdditionalSymbol {get; set;}
```
## Parameters

None.

## Return Value

Tolerance zone modifier as defined in swToleranceZoneModifier_e

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)
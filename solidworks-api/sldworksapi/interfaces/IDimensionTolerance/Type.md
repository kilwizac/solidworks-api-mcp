---
type: property
interface: IDimensionTolerance
member: Type
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - type
  - idimensiontolerance
  - dimension
  - tolerance
  - int32
readonly: null
---

# IDimensionTolerance.Type

Gets or sets the type of tolerance.

## Signature

```csharp
System.Int32 Type {get; set;}
```
## Parameters

None.

## Return Value

Type of tolerance as defined in swTolType_e (see Remarks )

## Remarks

In SOLIDWORKS 2016 and later, use
ICalloutVariable::ToleranceType
to set the type of tolerance for a hole's display dimension with multiple values in a callout. Calling IDimensionTolerance::Type to set the type of tolerance for a hole's display dimension with multiple values in a callout does not override ICalloutVariable::ToleranceType's setting.
To see the effects of changing the tolerance type, use
IModelDoc2::GraphicsRedraw2
.

## Examples

- IDimensionTolerance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDimensionTolerance)
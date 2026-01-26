---
type: method
interface: IGtol
member: CanConvertFormat
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - canconvertformat
  - igtol
  - gtol
  - can
  - convert
  - format
  - boolean
  - igtolframe
---

# IGtol.CanConvertFormat

Gets whether this Gtol can be converted to the current format.

## Signature

```csharp
System.Boolean CanConvertFormat()
```
## Parameters

None.

## Return Value

True if can be converted, false if not

## Remarks

If this method returns true, call
IGtol::ConvertFormat
to convert the Gtol to the current format.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)
---
type: method
interface: IGtol
member: ConvertFormat
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - convertformat
  - igtol
  - gtol
  - convert
  - format
  - int32
  - igtolframe
---

# IGtol.ConvertFormat

Converts this Gtol to the current format.

## Signature

```csharp
System.Int32 ConvertFormat()
```
## Parameters

None.

## Return Value

0 if successfully converted, otherwise error code as defined by swGtolFormatConversionError_e

## Remarks

Before calling this method, use
IGtol::CanConvertFormat
to determine whether conversion is possible.
If unsupported data are in this older Gtol, then this method will fail.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)
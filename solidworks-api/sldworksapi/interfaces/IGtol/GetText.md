---
type: method
interface: IGtol
member: GetText
returns: System.String
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Text part to get as defined in swGTolTextParts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.SetText
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - gettext
  - igtol
  - gtol
  - text
  - which
  - int32
  - string
---

# IGtol.GetText

Gets the specified text part of this GTol.

## Signature

```csharp
System.String GetText( 
   System.Int32
WhichText
)
```
## Parameters

- `WhichText` (System.Int32): Text part to get as defined in swGTolTextParts_e

## Return Value

Text part

## Examples

- IGTol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtol)

## See Also

- `IGtol.SetText`
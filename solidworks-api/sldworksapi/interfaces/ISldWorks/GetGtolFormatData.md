---
type: method
interface: ISldWorks
member: GetGtolFormatData
returns: void
parameters:
  -
    name: GtolFormat
    type: System.Int32
    description: Gtol format as defined by swGtolFormatType_e
  -
    name: XmlSchemaversion
    type: System.Int32
    description: XML schema version as defined by swGtolFormatSchemaVersion_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetGtolFrameXMLSchema
keywords:
  - getgtolformatdata
  - isldworks
  - sld
  - works
  - gtol
  - format
  - data
  - int32
  - xml
  - schemaversion
  - void
---

# ISldWorks.GetGtolFormatData

Gets the Gtol format and XML schema versions supported by this version of SOLIDWORKS.

## Signature

```csharp
void GetGtolFormatData( 
   out System.Int32
GtolFormat
,
   out System.Int32
XmlSchemaversion
)
```
## Parameters

- `GtolFormat` (System.Int32): Gtol format as defined by swGtolFormatType_e
- `XmlSchemaversion` (System.Int32): XML schema version as defined by swGtolFormatSchemaVersion_e

## Return Value

Unknown.

## Remarks

See
Gtol Frame XML Schema
.

## See Also

- `ISldWorks.GetGtolFrameXMLSchema`
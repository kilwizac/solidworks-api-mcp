---
type: property
interface: IDocumentSpecification
member: AutoRepair
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - autorepair
  - idocumentspecification
  - document
  - specification
  - auto
  - repair
  - boolean
readonly: null
---

# IDocumentSpecification.AutoRepair

Gets or sets whether to automatically repair non-critical custom properties errors in the file to be opened.

## Signature

```csharp
System.Boolean AutoRepair {get; set;}
```
## Parameters

None.

## Return Value

True to automatically repair custom properties errors, false to not (default) (see Remarks )

## Remarks

This property is valid only if
IDocumentSpecification::Silent
is set to true.
If the document to be opened has a non-critical data error, the non-critical data error may or may not be repaired, depending on how you set this property and other conditions.
If you set this property to true, and the file to open has non-critical data corruption in:
The custom properties area, the repair proceeds, and
ISldWorks::OpenDoc7
returns the document with warning,
swFileLoadWarning_e
.swFileLoadWarning_AutomaticRepair.
An area other than custom properties, the document is not repaired.
The following files are created in c
:\Users\
user
\AppData\Local\Temp:
Repaired_
file_name.sld*
Backup of
file_name.sld*
If you set this property to false, and the file to open has non-critical data corruption:
The document is not repaired.
The document does not open.
ISldWorks::OpenDoc7
fails and returns null with error code,
swFileLoadError_e
.FileRequiresAutoRepair.
If critical data corruption exists in the file, and you set
IDocumentSpecification::CriticalDataRepair
to true to handle critical data corruption:
Non-critical data corruptions are ignored and not repaired.
Repairing critical errors necessitates obliterating all non-critical data.
Use For C++ only, VARIANT_TRUE (-1) automatically repairs the file, and VARIANT_FALSE (0) does not.
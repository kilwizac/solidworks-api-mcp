---
type: method
interface: IModelDoc2
member: SketchConstraintsDel
returns: void
parameters:
  -
    name: ConstrInd
    type: System.Int32
    description: Constraint number on the selected entity; 0-based index
  -
    name: IdStr
    type: System.String
    description: Constraint to delete (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SkToolsAutoConstr
  - IModelDoc2.SketchAddConstraints
  - IModelDoc2.SketchConstrainCoincident
  - IModelDoc2.SketchConstrainConcentric
  - IModelDoc2.SketchConstrainParallel
  - IModelDoc2.SketchConstrainPerp
  - IModelDoc2.SketchConstrainTangent
  - IModelDoc2.SketchConstraintsDelAll
keywords:
  - constraints
  - relations
  - sketch
  - see
  - also
  - isketch
  - entities
  - sketchconstraintsdel
  - imodeldoc2
  - model
  - doc2
  - del
  - constr
  - ind
  - int32
  - id
  - str
  - string
  - void
---

# IModelDoc2.SketchConstraintsDel

Deletes the specified relationship (constraint) on the currently selected sketch item.

## Signature

```csharp
void SketchConstraintsDel( 
   System.Int32
ConstrInd
,
   System.String
IdStr
)
```
## Parameters

- `ConstrInd` (System.Int32): Constraint number on the selected entity; 0-based index
- `IdStr` (System.String): Constraint to delete (see Remarks )

## Return Value

Unknown.

## Remarks

To delete a tangency relation, which is the third relation on the selected arc, specify:
Part.SketchConstraintsDel 2, "sgTANGENT"
The available constraints are as follows. Pass them as strings embedded in quotes:
SOLIDWORKS 2005 and earlier
SOLIDWORKS 2006 and later
sgHORIZONTAL (2D sketch)
sgHORIZONTAL2D
sgHORIZONTAL (3D sketch)
sgALONGX3D
sgHORIZPOINTS (2D sketch)
sgHORIZONTALPOINTS2D
sgHORIZPOINTS (3D sketch)
sgALONGXPOINTS3D
sgVERTICAL (2D sketch)
sgVERTICAL2D
sgVERTICAL (3D sketch)
sgALONGY3D
sgVERTPOINTS (2D sketch)
sgVERTICALPOINTS2D
sgVERTPOINTS (3D sketch)
sgALONGYPOINTS3D
sgALONGZPOINTS
sgALONGZ
sgCOLINEAR
sgCORADIAL
sgPERPENDICULAR
sgPARALLEL
sgTANGENT
sgCONCENTRIC
sgCOINCIDENT
sgSYMMETRIC
sgATMIDDLE
sgATINTERSECT
sgATPIERCE
sgFIXED
sgANGLE
sgARCANG180
sgARCANG270
sgARCANG90
sgARCANGBOTTOM
sgARCANGLEFT
sgARCANGRIGHT
sgARCANGTOP
sgDIAMETER
sgDISTANCE
sgSAMELENGTH
sgOFFSETEDGE
sgSNAPANGLE
sgSNAPGRID
sgSNAPLENGTH
sgUSEEDGE
sgALONGZPOINTS3D
sgALONGZ3D
sgCOLINEAR
sgCORADIAL
sgPERPENDICULAR
sgPARALLEL
sgTANGENT
sgCONCENTRIC
sgCOINCIDENT
sgSYMMETRIC
sgATMIDDLE
sgATINTERSECT
sgATPIERCE
sgFIXED
sgANGLE
sgARCANG180
sgARCANG270
sgARCANG90
sgARCANGBOTTOM
sgARCANGLEFT
sgARCANGRIGHT
sgARCANGTOP
sgDIAMETER
sgDISTANCE
sgSAMELENGTH
sgOFFSETEDGE
sgSNAPANGLE
sgSNAPGRID
sgSNAPLENGTH
sgUSEEDGE
sgMERGEPOINTS
NOTE:
Although SOLIDWORKS 2006 and later accepts the constraints shown in the first column, you are encouraged to use the constraints shown in the second column.

## See Also

- `IModelDoc2.SkToolsAutoConstr`
- `IModelDoc2.SketchAddConstraints`
- `IModelDoc2.SketchConstrainCoincident`
- `IModelDoc2.SketchConstrainConcentric`
- `IModelDoc2.SketchConstrainParallel`
- `IModelDoc2.SketchConstrainPerp`
- `IModelDoc2.SketchConstrainTangent`
- `IModelDoc2.SketchConstraintsDelAll`